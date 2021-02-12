// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';
var button_1;
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];
function constructOptions(kButtonColors) { //rem var page
  for (let item of kButtonColors) {
    button_1 = document.createElement('button'); //let
    button_1.style.backgroundColor = item;
    button_1.addEventListener('click', function() {
      chrome.storage.sync.set({color: item}, function() {
        console.log('color is ' + item);
      })
    });
    this.appendChild(button_1);
  }
}
constructOptions(kButtonColors);
