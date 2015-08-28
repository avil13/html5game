canvas = document.createElement('canvas')
ctx = canvas.getContext('2d')
canvas.width = 512
canvas.height = 280
document.getElementById('container').appendChild(canvas)



loadImg = (cb, arr)->
    load = (path)->
        bgImage = new Image()
        bgImage.onload = ->
            arr.splice arr.indexOf(path), 1
            if arr.length == 0 then cb()
        bgImage.src = path

    i = 0
    while i < arr.length
        load(arr[i])
        i++



loadImg main, [
        'src/img/background.png'
        'src/img/monster.png'
        'src/img/hero.png'
    ]
