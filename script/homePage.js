const seasonsData = [
    {
        "season" : "1",
        "seasonName" : "İndigo Ligi"
    },
    {
        "season" : "2",
        "seasonName" : "Portakal Adası Maceraları"
    },
    {
        "season" : "3",
        "seasonName" : "Johto Yolculukları"
    },
    {
        "season" : "4",
        "seasonName" : "Johto Ligi Şampiyonaları"
    },
    {
        "season" : "5",
        "seasonName" : "Ana Görev"
    },
    {
        "season" : "6",
        "seasonName" : "Gelişmiş Nesil"
    },
    {
        "season" : "7",
        "seasonName" : "Gelişmiş Mücadele"
    },
    {
        "season" : "8",
        "seasonName" : "Gelişmiş Savaş"
    },
    {
        "season" : "9",
        "seasonName" : "Savaş Sınırı"
    },
    {
        "season" : "10",
        "seasonName" : "Elmas ve İnci"
    },
    {
        "season" : "11",
        "seasonName" : "E&İ Savaş Boyutları"
    },
    {
        "season" : "12",
        "seasonName" : "E&İ Galaktik Maçlar"
    },
    {
        "season" : "13",
        "seasonName" : "E&İ Sinnoh Lig Galipleri"
    },
    {
        "season" : "14",
        "seasonName" : "Siyah ve Beyaz"
    },
    {
        "season" : "15",
        "seasonName" : "S&B Rakip Yazgılar"
    },
    {
        "season" : "16",
        "seasonName" : "S&B Unovada Maceralar"
    },
    {
        "season" : "17",
        "seasonName" : "XY"
    },
    {
        "season" : "18",
        "seasonName" : "XY Kalos Macerası"
    },
    {
        "season" : "19",
        "seasonName" : "XY&Z"
    },
    {
        "season" : "20",
        "seasonName" : "Güneş ve Ay"
    },
    {
        "season" : "21",
        "seasonName" : "G&A Ultra Maceralar"
    },
    {
        "season" : "22",
        "seasonName" : "G&A Ultra Efsaneler"
    },
    {
        "season" : "23",
        "seasonName" : "Pokemon Yolculukları"
    },
    {
        "season" : "24",
        "seasonName" : "P. Ustası Yolculukları"
    },
    {
        "season" : "25",
        "seasonName" : "Benzersiz Yolculuklar"
    },
    {
        "season" : "26",
        "seasonName" : "Pokemon Ufukları"
    }
]

const seasons = ()=> {

    // Tüm sezonların kapaklarını oluşturmak..
    const allSeasonsSection = document.querySelector(".all-seasons")

        let result = ""

        seasonsData.map((item,index)=> {
            result += `
            <a class="season" href="./html/season.html" data-id="${index + 1}">

                <picture>

                    <figure>
                        <img src="https://pokemonTr.b-cdn.net/images/Season%20Images/${item.season}.jpg" alt="${item.season}. Sezon">
                    </figure>

                    <figcaption>
                        <h2>${item.season}. Sezon</h2>
                        <p>${item.seasonName}</p>
                    </figcaption>

                </picture>

            </a>
            `
        })
        allSeasonsSection.innerHTML = result

        // Son kaldığın yerden izle kapağını oluşturmak

        if(localStorage.getItem("season")) {
            const season = localStorage.getItem("season") || 1
            const seasonName = localStorage.getItem("seasonName") || "indigo ligi"
            const episode = localStorage.getItem("episode") || 1
            const episodeName = localStorage.getItem("lastEpisodeName") || "pokemon ben seni seçiyorum"
            const thumbnail = localStorage.getItem("thumbnail") || `https://pokemonTr.b-cdn.net/images/Playlist%20Images/Season1/1.png`
    
            const firstSeason = allSeasonsSection.querySelectorAll("a")[0]
    
            const lastEpisode = document.createElement("a")
            lastEpisode.innerHTML = `
                        <div class="overlay">izlemeye devam et</div>
                        <picture>
    
                            <figure>
                                <img src="${thumbnail}" alt="${season}. Sezon">
                            </figure>
    
                            <figcaption>
                                <div class="season-wrapper">
                                    <h2 class"season"><span>${season}</span>. Sezon</h2>
                                    <p class"season">${seasonName}</p>
                                </div>
                                <div class="episode-wrapper">
                                    <h2 class"episode">${episode}. Bölüm</h2>
                                    <p class"episode">${episodeName}</p>
                                </div>
                            </figcaption>
    
                        </picture>
            `
            lastEpisode.href = "./html/season.html"
                console.log();
            allSeasonsSection.insertBefore(lastEpisode,firstSeason)
        }
        


    // Hangi sezon kapağına tıklarsan, o sezonun playlist ekranını oluşturmak..

    const seasonNos = document.querySelectorAll(".all-seasons a.season")

        seasonNos.forEach(item=>item.addEventListener("click", ()=> {

            const seasonNo = item.dataset.id
            const seasonName = item.querySelector("p").innerText
            
                localStorage.setItem("season",`${seasonNo}`)
                localStorage.setItem("seasonName", `${seasonName}`)

            //** Yeni sezona geçtiğinde localStorage(video)'nun en soz izlenen bölümü kaydetmesi sorunasılını
                    //** çözmek için localStorage'ı sil 
                    localStorage.removeItem("episode")
                    localStorage.removeItem("lastEpisodeName")
        }))

        // Son kaldığın yer kapağına tıkladığında o bölümü açmak ve o sezonun playlistini oluşturmak
        const lastSeasonCover = allSeasonsSection.querySelectorAll("a")[0]

            lastSeasonCover.addEventListener("click", ()=> {

                const lastSeasonNo = lastSeasonCover.querySelector(".season-wrapper h2 span").innerText
                    localStorage.setItem("season",`${lastSeasonNo}`)
            })
}

    window.addEventListener("DOMContentLoaded",seasons)





