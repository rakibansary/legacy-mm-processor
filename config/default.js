/**
 * The default configuration.
 */
module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',

  KAFKA_CONCURRENCY: process.env.KAFKA_CONCURRENCY ? Number(process.env.KAFKA_CONCURRENCY) : 1,
  // The client group ID for committing and fetching offsets.
  // All clients sharing the same group ID belong to the same group.
  KAFKA_GROUP_ID: process.env.KAFKA_GROUP_ID || 'tc-mm-submission-legacy-processor',

  // The comma delimited list of initial brokers list
  KAFKA_URL: process.env.KAFKA_URL || 'ssl://kafka-host:9093',

  // The client cert, can be (1) the path to the cert file, or (2) the cert content
  KAFKA_CLIENT_CERT: process.env.KAFKA_CLIENT_CERT || './docker/kafka/kafka-ssl/client.crt',

  // The client cert key, can be (1) the path to the cert key file, or (2) the cert key content
  KAFKA_CLIENT_CERT_KEY: process.env.KAFKA_CLIENT_CERT_KEY || './docker/kafka/kafka-ssl/client.key',

  KAFKA_ERROR_TOPIC: process.env.KAFKA_ERROR_TOPIC || 'common.error.reporting',

  // The topic from which the app consumes events
  KAFKA_AGGREGATE_SUBMISSION_TOPIC: process.env.KAFKA_AGGREGATE_SUBMISSION_TOPIC || 'submission.notification.aggregate',

  // New submission topic
  KAFKA_NEW_SUBMISSION_TOPIC: process.env.KAFKA_NEW_SUBMISSION_TOPIC || 'submission.notification.create',

  // topic for update event
  KAFKA_UPDATE_SUBMISSION_TOPIC: process.env.KAFKA_UPDATE_SUBMISSION_TOPIC || 'submission.notification.update',

  // The event originator
  KAFKA_NEW_SUBMISSION_ORIGINATOR: process.env.KAFKA_NEW_SUBMISSION_ORIGINATOR || 'submission-api',

  // The Submission API URL
  SUBMISSION_API_URL: process.env.SUBMISSION_API_URL || 'http://mock-api-host:3000',

  // The Submission API timeout
  SUBMISSION_TIMEOUT: process.env.SUBMISSION_TIMEOUT || '10000',

  // payload.types
  PAYLOAD_TYPES: process.env.PAYLOAD_TYPES || 'bcf2b43b-20df-44d1-afd3-7fc9798dfcae',

  // The Informix db pool size
  DB_POOL_SIZE: process.env.DB_POOL_SIZE ? Number(process.env.DB_POOL_SIZE) : 10,

  // The Informix Server Name
  DB_SERVER: process.env.DB_SERVER || 'informixoltp_tcp',

  // The Informix Database Name
  DB_NAME: process.env.DB_NAME || 'tcs_catalog',

  DB_PORT: process.env.DB_PORT || '2021',

  DB_PROTOCOL: process.env.DB_PROTOCOL || 'onsoctcp',

  DB_LOCALE: process.env.DB_LOCALE || 'en_US.57372',

  // The CommonOLTP Database Name
  DB_ID_NAME: process.env.DB_ID_NAME || 'common_oltp',

  // The Informix Host
  DB_HOST: process.env.DB_HOST || 'informix',

  // The Informix Service
  DB_SERVICE: process.env.DB_SERVICE || 'sqlexec',

  // The Informix Database Username
  DB_USERNAME: process.env.DB_USERNAME || 'informix',

  // The Informix Database Password
  DB_PASSWORD: process.env.DB_PASSWORD || '1nf0rm1x',

  // The Informix Upload Table Sequence Name
  ID_SEQ_UPLOAD: process.env.ID_SEQ_UPLOAD || 'upload_id_seq',

  // The Informix Submission Table Sequence Name
  ID_SEQ_SUBMISSION: process.env.ID_SEQ_SUBMISSION || 'submission_id_seq',

  // The Informix long_component_state Table Sequence Name
  ID_SEQ_COMPONENT_STATE: process.env.ID_SEQ_COMPONENT_STATE || 'COMPONENT_STATE_SEQ',

  AUTH0_URL: process.env.AUTH0_URL || 'https://topcoder-dev.auth0.com/oauth/token', // Auth0 credentials for Submission Service

  AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || 'https://m2m.topcoder-dev.com/',

  TOKEN_CACHE_TIME: process.env.TOKEN_CACHE_TIME || '86400000',

  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,

  AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,

  AUTH0_PROXY_SERVER_URL: process.env.AUTH0_PROXY_SERVER_URL,

  BUSAPI_URL: process.env.BUSAPI_URL || 'https://api.topcoder-dev.com/v5',

  KAFKA_MESSAGE_ORIGINATOR: process.env.KAFKA_MESSAGE_ORIGINATOR || 'Legacy-MM-Processor',

  POST_KAFKA_ERROR_ENABLED: process.env.POST_KAFKA_ERROR_ENABLED || true,

  MESSAGE_RETRY_COUNT: process.env.MESSAGE_RETRY_COUNT ? Number(process.env.MESSAGE_RETRY_COUNT) : 5,

  CHALLENGE_INFO_API: process.env.CHALLENGE_INFO_API || 'http://mock-api-host:3000/challenges?filter=id={cid}', // {cid} gets replaced with challenge id

  CHALLENGE_SUBTRACK: process.env.CHALLENGE_SUBTRACK || 'MARATHON_MATCH, DEVELOP_MARATHON_MATCH',

  // Configuration options for APM tracing
  tracing: {
    dataDogEnabled: process.env.DATADOG_ENABLED ? process.env.DATADOG_ENABLED === 'true' : true, // Enable/Disable Datadog
    lightStepEnabled: process.env.LIGHTSTEP_ENABLED ? process.env.LIGHTSTEP_ENABLED === 'true' : true, // Enable/Disable LightStep
    signalFXEnabled: process.env.SIGNALFX_ENABLED ? process.env.SIGNALFX_ENABLED === 'true' : false, // Enable/Disable SignalFx

    dataDog: { // Datadog configuration
      service: process.env.DATADOG_SERVICE_NAME || 'tc-legacy-mm-processor', // name of the service
      hostname: process.env.DD_TRACE_AGENT_HOSTNAME || 'host.docker.internal', // IP hostname where the agent is running. The value of this might be different based on your OS. For MAC and Windows hosts (where datadog agent is running), by default, the server runs inside docker and trace agent on localhost, so we set default hostname to 'host.docker.internal' so that the server can log traces from docker to localhost:8126
      port: process.env.DATADOG_PORT || 8126 // The port number of the datadog agent
    },

    lightStep: { // LightStep configuration
      access_token: process.env.LIGHTSTEP_ACCESS_TOKEN, // LightStep access token
      component_name: process.env.LIGHTSTEP_COMPONENT_NAME || 'tc-legacy-mm-processor' // Compenent name
    },

    signalFX: { // SignalFx configuration
      service: process.env.SIGNALFX_SERVICE_NAME || 'tc-legacy-mm-processor', // Name of the service
      accessToken: process.env.SIGNALFX_ACCESS_TOKEN, // SignalFx access token
      url: `http://${process.env.SIGNALFX_TRACE_AGENT_HOSTNAME}:9080/v1/trace` // SignalFx SmartAgent url
    }
  }
}
