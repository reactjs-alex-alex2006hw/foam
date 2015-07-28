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
  package: 'foam.apps.builder.questionnaire',
  name: 'AppConfig',
  extendsModel: 'foam.apps.builder.AppConfig',

  requires: [
    'BooleanProperty',
    'StringProperty',
    'IntProperty',
    'FloatProperty',
    'DateProperty',
    'Model',
    'foam.ui.md.DetailView',
    'foam.ui.TableView',
    'foam.apps.builder.questionnaire.Questionnaire',
  ],

  properties: [
    {
      name: 'model',
      label: 'Questions',
      view: 'foam.ui.md.DetailView',
      factory: function() {
        return this.Model.create({
          extendsModel: 'foam.apps.builder.questionnaire.Questionnaire',
          properties: [
            this.BooleanProperty.create({ name: 'boolprop' }),
            this.StringProperty.create({ name: 'stringprop' }),
            this.IntProperty.create({ name: 'intprop' }),
            this.FloatProperty.create({ name: 'floatprop' }),
            this.DateProperty.create({ name: 'dateprop' }),
          ]
        });
      },
      preSet: function(old,nu) {
        if (nu) console.log(this.$UID, "nu pre", nu.$UID, nu.create);
        return nu;
      },
      postSet: function(old,nu) {
        if (nu) console.log(this.$UID, "nu post", nu.$UID);
      },
    }
  ]
});