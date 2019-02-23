import * as contentful from 'contentful';

const client = contentful.createClient({
  space: 'c5obuavsserj',
  accessToken: 'c395024bbd1900395e916ad378a9bf613cb980d86662eed66e54802f86d6985b' 
});

export default client;
