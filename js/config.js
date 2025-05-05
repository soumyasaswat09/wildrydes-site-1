window._config = {
    cognito: {
        userPoolId: 'us-east-1_Mv3wiwia8', // e.g. us-east-2_uXboG5pAb
        userPoolClientId: 'arn:aws:cognito-idp:us-east-1:266735826442:userpool/us-east-1_Mv3wiwia8', // e.g. 25ddkmj4v6hfsfvruhpfi7n4hv
        region: 'us-east-1' // e.g. us-east-2
    },
    api: {
        invokeUrl: 'https://cognito-idp.us-east-1.amazonaws.com/us-east-1_Mv3wiwia8/.well-known/jwks.json' // e.g. https://rc7nyt4tql.execute-api.us-west-2.amazonaws.com/prod',
    }
};
