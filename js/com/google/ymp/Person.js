/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 */

CLASS({
  package: 'com.google.ymp',
  name: 'Person',
  extends: 'com.google.plus.Person',
  traits: ['foam.core.dao.SyncTrait'],

  properties: [
    {
      type: 'ReferenceArray',
      name: 'subscribedMarkets',
      subType: 'com.google.ymp.Market',
      help: 'The marketplaces full of posts that should be synched',
    },
  ],
});