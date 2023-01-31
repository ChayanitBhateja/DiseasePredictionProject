import AWS from "aws-sdk";
const NEXT_PUBLIC_COGNITO_POOL_ID =
  "us-east-2:6b57377f-7bb0-4e0c-b9d3-d37e9b6de303";
const NEXT_PUBLIC_COGNITO_POOL_REGION = "us-east-2";
const NEXT_PUBLIC_S3_BUCKET_REGION = "ap-south-1";
const NEXT_PUBLIC_S3_BUCKET_NAME = "sportex-bucket";

const AWSService = AWS;
AWS.config.update({
  region: NEXT_PUBLIC_COGNITO_POOL_REGION,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: NEXT_PUBLIC_COGNITO_POOL_ID,
  }),
});

// const s3 = new AWSService.S3({
//   apiVersion: '2006-03-01',
//   params: { Bucket: this.awsBucketForm.value.bucketName}
// });

export default function addPhoto(files) {
  console.log(files, "file in test files");
  var file = files;
  var fileName = Math.floor(Math.random() * 10000000) + file.name;
  var albumPhotosKey = encodeURIComponent("profileImages") + "/";
  var photoKey = albumPhotosKey + fileName;

  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: NEXT_PUBLIC_S3_BUCKET_NAME,
      Key: photoKey,
      Body: file,
      ACL: "public-read",
    },
  });

  var promise = upload.promise();
  return promise;
}
