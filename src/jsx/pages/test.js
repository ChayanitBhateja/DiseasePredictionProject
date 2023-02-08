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

export default async function addPhoto(files, albumName) {
  console.log(files, "file in test files");
  var file = files;
  var fileName = Math.floor(Math.random() * 10000000) + file.name;
  var albumPhotosKey = encodeURIComponent(albumName) + "/";
  var photoKey = albumPhotosKey + fileName;

  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: NEXT_PUBLIC_S3_BUCKET_NAME,
      Key: photoKey,
      Body: file,
      ACL: "public-read",
    },
  });

  var promise = await upload.promise();
  promise.imageName = fileName;
  return promise;
}

export const AWS_PHOTO_BASE_URL =
  "https://sportex-bucket.s3.ap-south-1.amazonaws.com/profileImages/";

export const AWS_BANNER_PHOTO_BASE_URL =
  "https://sportex-bucket.s3.ap-south-1.amazonaws.com/banner/";
