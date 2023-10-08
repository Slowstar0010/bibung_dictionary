const types = ['jet', 'heli']

const createAircraftLink = (type) => {
    const aircraftLink = document.createElement('a');
    const aircraftImg = document.createElement('img');

    aircraftImg.src =   type.img_src;
    aircraftImg.alt = type.name;
    aircraftImg.classList.add('module_imgs')
    aircraftImg.classList.add('module_img')

    aircraftLink.href = type.slug
    aircraftLink.appendChild(aircraftImg);
    
    return aircraftLink;
}

const createAircraftBox = (aircraft, team) => {
    types.forEach((type) => {
        console.log(type)
        const section = document.querySelector(`.${team}_box .module_${type}`)
        console.log(team)
        const filteredAircraft = aircraft[team][type]
        console.log('필터링된 에어크래프트:',filteredAircraft)
        filteredAircraft.forEach((data) => {
            const aircraftLink = createAircraftLink(data);
            section.appendChild(aircraftLink)
        })
    })
}


const fetchModulesTree = async () => {
    try {
        const res = await fetch('../assets/data/module.json');
        const { aircraft } = await res.json();
        console.log(aircraft)
        createAircraftBox(aircraft, "blue")
        createAircraftBox(aircraft, "red")
    } catch (error) {
        throw error;
    }
  
}


export { fetchModulesTree }

