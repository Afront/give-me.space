---
title: Create a donation page
---

<form action="http://httpbin.org/post" method="post">
  Patreon Link: <!--br-->
  <input type="text" name="patreon">
  <br>
  BTC Address: <!--br-->
  <input type="text" name="btc_address">
  <br>
  ETH Address: <!--br-->
  <input type="text" name="eth_address">
  <br><br>
  <input type="submit" value="Submit">
</form>

<script type="text/javascript">
  var url = window.location.search;
  var token;
  if(url.charAt(0) === '?'){
    url = url.substr(1);
  }
  url = url.split('&');

  for (var i = 0; i < url.length; i++) {
    if (url[i].indexOf("code=") !== -1) {
      token = url[i].split('=')[1];
      document.writeln(token);
    }
  }

</script>