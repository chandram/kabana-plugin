import { resolve } from 'path';
import exampleRoute from './server/routes/example';

export default function (kibana) {
  return new kibana.Plugin({
    require: ['elasticsearch'],

    uiExports: {
      
      app: {
        title: 'The One',
        description: 'An awesome Kibana plugin',
        main: 'plugins/the_one/app'
      },
      
      
      translations: [
        resolve(__dirname, './translations/es.json')
      ],
      
      
      hacks: [
        'plugins/the_one/hack'
      ]
      
    },

    config(Joi) {
      return Joi.object({
        enabled: Joi.boolean().default(true),
      }).default();
    },

    
    init(server, options) {
      // Add server routes and initalize the plugin here
      exampleRoute(server);
    }
    

  });
};
