
function step1(fn) {
    console.log(`Please wait image is being selected....`);
    setTimeout(() => {
        console.log(`image selected`);
        fn(`image selected`);
    }, 4000);
}

function step2(image, fn) {
    console.log(`Applying fileter to the ${image}`)
    setTimeout(() => {
        console.log(`Filter applied to ${image}`);
        fn(`Filtered Image`)
    }, 2000);
}


function step3(filter, fn) {
    console.log(`Applying caption to the ${filter}`);
    setTimeout(() => {
        console.log(`caption applied`)
        fn(`caption applied`);
    }, 3000);
}

function step4(caption) {
    console.log(`${caption} image is ready to upload`)
}
step1(function (image) {
    step2(image, function (filter) {
        step3(filter, function (caption) {
            step4(caption);
        });
    });
})