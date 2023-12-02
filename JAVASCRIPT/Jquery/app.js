

let h1 = $('h1');

let para = $('p');


para.css('color', 'red');
para.css('border', '2px solid black')
para.css('background-color', 'yellow')

para.css(
    {
        color: 'blue',
        border: '5px solid green',
        fontSize: '40px',
        backgroundColor: 'pink'
    }
)


console.log(para.text())


para.text('Lorem ipsum dolor sit amet consectetur adipisicing. ')

console.log(para.html())