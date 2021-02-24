import config from '../config';

const RecrutingApiService = {
    getAgents(search, sort) {
        const {name, brokerage} = search;
        let reqString = '';

        debugger;

        (!name && !brokerage && !sort)
            ? reqString = `${config.API_ENDPOINT}/agent`
            : (!name && !brokerage)
                ? reqString = `${config.API_ENDPOINT}/agent?sort=${sort}`
                : (!sort)
                    ? (!name)
                        ? reqString = `${config.API_ENDPOINT}/agent?brokerage=${brokerage}`
                        : (!brokerage) && (reqString = `${config.API_ENDPOINT}/agent?&sort=${sort}`)
                    : (!brokerage)
                        ? (reqString = `${config.API_ENDPOINT}/agent?name=${name}&sort=${sort}`)
                        : reqString = `${config.API_ENDPOINT}/agent?name=${name}&brokerage=${brokerage}&sort=${sort}`
                    
        
        
        return fetch(reqString, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getAgent(id) {
        return fetch(`${config.API_ENDPOINT}/agent/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getUser(id) {
        return fetch(`${config.API_ENDPOINT}/user/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getNotes() {
        return fetch(`${config.API_ENDPOINT}/note`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getNote(id) {
        return fetch(`${config.API_ENDPOINT}/note/${id}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    getFollowedAgents(userId) {
        return fetch(`${config.API_ENDPOINT}/followed-agent/${userId}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            }
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addUser(username, password, first_name, last_name, email, phone, brokerage) {
        return fetch(`${config.API_ENDPOINT}/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                username,
                password,
                first_name,
                last_name,
                email,
                phone,
                brokerage,
            }),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addNote(title, content, username_id, agent_id) {
        return fetch(`${config.API_ENDPOINT}/note`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                title,
                content,
                username_id,
                agent_id
            }),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    addFollowedAgent(userId, agent_id) {
        return fetch(`${config.API_ENDPOINT}/followed-agent/${userId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                agent_id,
                user_id: userId,
            }),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateUser(id, username, password, first_name, last_name, email, phone, brokerage,) {
        return fetch(`${config.API_ENDPOINT}/user/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                username,
                password,
                first_name,
                last_name,
                email,
                phone,
                brokerage,
            }),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    updateNote(id, title, content, username_id, agent_id) {
        return fetch(`${config.API_ENDPOINT}/note/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                title,
                content,
                username_id,
                agent_id
            }),
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteUser(id) {
        return fetch(`${config.API_ENDPOINT}/user/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteNote(id) {
        return fetch(`${config.API_ENDPOINT}/note/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
    deleteFollowedAgent(userId, agent_id) {
        return fetch(`${config.API_ENDPOINT}/followed-agent/${userId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${config.API_KEY}`,
            },
            body: JSON.stringify({
                agent_id,
                user_id: userId,
            })
        })
            .then(res =>
                (!res.ok) 
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },
}

export default RecrutingApiService;