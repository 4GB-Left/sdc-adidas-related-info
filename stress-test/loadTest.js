import http from 'k6/http';
import { check, sleep } from 'k6';

/*
https://k6.io/blog/how-to-generate-a-constant-request-rate-in-k6

Request Rate = (VU*R)/T

-Request Rate: measured by the number of requests per second (RPS)
-VU: the number of virtual users
R: the number of requests per VU iteration
T: a value larger than the time needed to complete a VU iteration

Need to calculate the T -- The overall time to complete the whole VU

T= (R*http_req_duration) + 1s => (1*.5s) + 1s = 1.5s

To achieve 1000 RPS
VU = (1000 * 1.5)/1 = 1500
*/

export let options = {
  stages: [
    { duration: '1m', target: 100},
    // { duration: '5m', target: 1000 },
    // { duration: '3m', target: 1100 },
    // { duration: '3m', target: 1200 },
    // { duration: '3m', target: 1300 },
    // { duration: '3m', target: 1400 },
    // { duration: '3m', target: 1500 },
  ],
  thresholds: {
    // 90% of requests must finish within 400ms.
    'http_req_duration': ['p(90) < 400'],
  }
};

export default function() {
  let res = http.get('http://localhost:5000/looks/1');
  check(res, {
    'status was 200': (r) => r.status == 200,
    'transaction time under 2000ms': (r) => r.timings.duration < 2000
  });

  sleep(.01);
}