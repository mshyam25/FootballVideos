async function footballVideos() {


    const response = await fetch('https://www.scorebat.com/video-api/v3/')

    const data = await response.json()

    await appendVideo(data)

}


footballVideos();

let appendVideo = (data) => {

    let sub_container = document.createElement('div')

    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div')
        div.innerHTML = data.response[i].videos[0].embed
        let p = document.createElement('p')
        p.innerHTML = data.response[i].title
        div.className = 'recent-highlights'
        div.appendChild(p)
        document.getElementById('container4').append(div)

    }



}