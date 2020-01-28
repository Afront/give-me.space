---
title: Create a donation page
---

<form action="http://httpbin.org/post" method="post">
  <fieldset>
    <label for="patreon">Patreon Link</label>
    <input type="text" placeholder="Enter a valid patreon link here" id="patreon">
    <label for="btc_address">BTC Address</label>
    <input type="text" placeholder="Enter a valid BTC address here" id="btc_address">
    <label for="eth_address">ETH Address</label>
    <input type="text" placeholder="Enter a valid ETH address here" id="eth_address">
    <label for="bio">Bio</label>
    <textarea placeholder="Talk about yourself!" id="bio"></textarea>
    <label for="purpose">Purpose</label>
    <select id="purpose">
      <option value="a">a</option>
      <option value="b">b</option>
      <option value="Others">Others</option>
    </select>
    <input class="button-primary" type="submit" value="Submit">
  </fieldset>
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