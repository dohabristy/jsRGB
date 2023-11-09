

// step

// step1--create unload handler
window.onload = () => {
    main();
}

function main () {
    const root = document.getElementById("root")
    const btn = document.getElementById("btn")

    btn.addEventListener('click',function(){
        const rgb = generatergbcolor()
        root.style.backgroundColor = rgb
    })
}

// step2--random color generator
// rgb(0,0,0), 
function generatergbcolor ( ){
    //rgb(0,0,0), rgb(255,255,255)
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    return `rgb(${red}, ${green},${blue})`
}

// step3--collect all reference


// step4--handle the click even