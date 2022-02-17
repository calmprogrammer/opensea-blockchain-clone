import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '5poc40wo',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skgaBAmEN9cA4MF2s552IbyduHUwj0OnfamCsAlPtaWzeMG14PIelXstTP8tSM4RDvWmBhKbI414UGbwKtirrrGJDwDXuTTGAYkQmwAs36lO91h3uBYOF8KNH0UAy68QRgckvr3Z9tLqyO6b263W7NoN7CjTPj3vPxNXbXAOAuqKcx45PhZf',
  useCdn: false,
})
