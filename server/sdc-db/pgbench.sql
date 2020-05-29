BEGIN
\set ctl_id random(1, 99999)
SELECT * FROM adidas_related_info.complete_the_look ctl
  INNER JOIN adidas_related_info.shirts
  ON ctl.shirt_id = shirts.id
  INNER JOIN adidas_related_info.pants
  ON ctl.pant_id = pants.id
  INNER JOIN adidas_related_info.socks
  ON ctl.socks_id = socks.id
  INNER JOIN adidas_related_info.relation_related_and_looks rrt
  ON ctl.id = rrt.look_id
  INNER JOIN adidas_related_info.related_products rt
  ON rrt.related_id = rt.id AND ctl.id = ctl_id;
END;