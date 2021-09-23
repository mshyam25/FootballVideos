let championsLeagueContainer = document.getElementById('container6')
let eplContainer = document.getElementById('container8')
let laligaContainer = document.getElementById('container10')
let serieContainer = document.getElementById('container12')
let bundesligaContainer = document.getElementById('container14')
let ligue1Container = document.getElementById('container16')



async function footballVideos() {


    const response = await fetch('https://www.scorebat.com/video-api/v3/')

    const data = await response.json()
    await appendRecentHighlights(data)
    append(data, championsLeagueContainer, 'CHAMPIONS LEAGUE:')
    append(data, eplContainer, 'ENGLAND: Premier League')
    append(data, laligaContainer, 'SPAIN: La Liga')
    append(data, serieContainer, 'ITALY: Serie A')
    append(data, bundesligaContainer, 'GERMANY: Bundesliga')
    append(data, ligue1Container, 'FRANCE: Ligue 1')




}


footballVideos();

//Function to Append Highlights

let append = (data, container, league) => {

    let count = 0

    for (let i = 0; i < data.response.length; i++) {
        if (count < 5) {
            let str = data.response[i].competition
            if (str.includes(league)) {

                const div = document.createElement('div')
                div.innerHTML = data.response[i].videos[0].embed
                let p = document.createElement('p')
                p.innerHTML = data.response[i].title
                div.className = 'highlights'
                div.appendChild(p)
                container.append(div)
                count++
            }

        } else
            break
    }


}

//Function to Append Recent Highlights

let appendRecentHighlights = (data) => {

    for (let i = 0; i < 5; i++) {
        const div = document.createElement('div')
        div.innerHTML = data.response[i].videos[0].embed
        let p = document.createElement('p')
        p.innerHTML = data.response[i].title
        div.className = 'highlights'
        div.appendChild(p)
        document.getElementById('container4').append(div)

    }

}