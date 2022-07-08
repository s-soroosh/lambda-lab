import {Context, SQSEvent} from 'aws-lambda';
import AWS from 'aws-sdk';

// const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'})


export const lambdaHandler = (event: SQSEvent, context: Context): void => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);

    // const docClient = new AWS.DynamoDB.DocumentClient();
    event.Records.forEach(record => {
        const event = JSON.parse(record.body);
        // docClient.put({
        //     TableName: "Events",
        //     Item: {
        //         Channel: event.channel,
        //         Event: event.event
        //     }
        // }, (error, data) => {
        //     if (error) {
        //         console.error(`Error: ${error}`)
        //     }
        //     if (data) {
        //         console.log(`Data: ${data}`)
        //     }
        // })
    })
};