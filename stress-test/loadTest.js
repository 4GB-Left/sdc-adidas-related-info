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
  max_vus: 1500,
  vus: 140,
  stages: [
    { duration: '30s', target: 50 }, // below normal load
    { duration: '30s', target: 100 }, // within normal load
    // { duration: '30s', target: 200 } // beyond breaking point
    { duration: '30s', target: 120 }, // still within normal load
    { duration: '30s', target: 125 }, //  still within normal load
    { duration: '30s', target: 140 }, // around the breaking point
  ],
  thresholds: {
    'RTT': ['avg<2000']
  }
};

export default function() {
  let res = http.get('http://localhost:5000');
  check(res, {
    'status was 200': (r) => r.status == 200
  });

  sleep(1);
}