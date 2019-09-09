/**
 * The test configuration.
 */
const MOCK_API_PORT = 3001
module.exports = {
  MOCK_API_PORT,
  LOG_LEVEL: 'debug',

  // The client group ID for committing and fetching offsets.
  // All clients sharing the same group ID belong to the same group.
  KAFKA_GROUP_ID: 'tc-mm-submission-legacy-processor',

  // The comma delimited list of initial brokers list
  KAFKA_URL: 'ssl://kafka-host:9093',

  // The client cert, can be (1) the path to the cert file, or (2) the cert content
  KAFKA_CLIENT_CERT: './docker/kafka/kafka-ssl/client.crt',

  // The client cert key, can be (1) the path to the cert key file, or (2) the cert key content
  KAFKA_CLIENT_CERT_KEY: './docker/kafka/kafka-ssl/client.key',

  // New submission topic
  KAFKA_NEW_SUBMISSION_TOPIC: 'submission.notification.create',

  // The event originator
  KAFKA_NEW_SUBMISSION_ORIGINATOR: 'new-submission-originator',

  // The Submission API URL
  SUBMISSION_API_URL: `http://localhost:${MOCK_API_PORT}`,

  // The Submission API timeout
  SUBMISSION_TIMEOUT: 2000,

  // payload.types
  PAYLOAD_TYPES: process.env.PAYLOAD_TYPES || 'bcf2b43b-20df-44d1-afd3-7fc9798dfcae',

  // The Informix Database Name
  DB_NAME: 'tcs_catalog',

  // The Informix Database Username
  DB_USERNAME: 'informix',

  // The Informix Database Password
  DB_PASSWORD: '1nf0rm1x',

  // The Informix Upload Table Sequence Name
  ID_SEQ_UPLOAD: 'upload_id_seq',

  // The Informix Submission Table Sequence Name
  ID_SEQ_SUBMISSION: 'submission_id_seq',

  // The Informix long_component_state Table Sequence Name
  ID_SEQ_COMPONENT_STATE: 'COMPONENT_STATE_SEQ',

  CHALLENGE_INFO_API: `http://localhost:${MOCK_API_PORT}/challenges?filter=id={cid}`, // {cid} gets replaced with challenge id

  CHALLENGE_SUBTRACK: 'MARATHON_MATCH, DEVELOP_MARATHON_MATCH'
}
