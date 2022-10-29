import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: 'snxcwgrh',
  dataset: 'production',
  apiVersion:'2022-02-01',
  useCdn: true
});