import React, { useState } from 'react';
import { withCookies, useCookies } from 'react-cookie';

// TODO: 只接受從props傳進來的value，cookie都從Express那邊處理

function YourVisitCounter(props) {
  const [cookies, setCookie] = useCookies();
  let entered = cookies['entered'];
  let counter = cookies['counter'];
  if (entered === undefined) {
    // TODO: 在Express中用cookie-parser這個middleware，先檢查cookie內容
    setCookie('entered', 1);
    if (counter !== undefined) {
      counter = parseInt(counter) + 1;
    } else {
      counter = 1;
    }
  }
  const expireDate = new Date(new Date().getFullYear(), new Date().getMonth()+1);
  setCookie('counter', counter, {expires: expireDate})
  return (
    <span>You have visited this website <strong>{counter}</strong> time(s)</span>
  );
}

export default withCookies(YourVisitCounter);