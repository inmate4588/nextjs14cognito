import { ResourcesConfig } from "aws-amplify";

const amplifyConfig: ResourcesConfig = {
    Auth: {
      Cognito: {
        userPoolClientId: '503oomostkuagui1pijcfj05ee',
        userPoolId: 'ap-southeast-2_jTYJ9Ia79',
        }
      }
    }

export default amplifyConfig;
