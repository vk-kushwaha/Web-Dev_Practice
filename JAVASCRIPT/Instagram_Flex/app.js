

function step1(fn) {
    console.log(`Slecting image please wait...`)
    setTimeout(() => {
        console.log(`Image is now selected`);
        fn(`image.jpg`)
    }, 4000);
}

function step2(image, fn) {
    console.log(`Applying filter to ${image}`);
    setTimeout(() => {
        console.log(`Filter applied to ${image}`)
        fn(`Filter applied`);
    }, 2000);
}

function step3(filter, fn) {
    console.log(`Adding caption to ${filter}`);
    setTimeout(() => {
        console.log(`caption added to ${filter}`)
        fn(`captioned image`)
    }, 3000);

}

function step4(caption) {
    console.log(`Uploading image please wait...`)
    setTimeout(() => {
        console.log(`Image uploaded successfully`)
    }, 5000);
}
step1(function (image) {
    step2(image, function (filter) {
        step3(filter, function (caption) {
            step4(caption);

        });

    });
});






















