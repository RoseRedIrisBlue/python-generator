// setting values to amazon cognito to connect to created instance
import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'us-east-1_nzTXRZIuM',
  ClientId: '4j7gqbuggnhs9iq9se9ce98ma7',
};

export default new CognitoUserPool(poolData);
