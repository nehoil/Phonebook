import HttpService from './HttpService'

export const contactService = {
    query,
    getEmpty,
    getById,
    save,
    remove
}

function getEmpty() {
    return {
        _id: null,
        name: null,
        price: null,
        type: null,
        createdAt: null,
        inStock: null
    }
}


async function query(filter = { term: null}) {
    const { term } = filter
    var queryURL = '?q='
    term ? queryURL += `&term=${term}` : ''
    return HttpService.get(`contact${queryURL}`)
}

async function getById(contactId) {
    return HttpService.get(`contact/${contactId}`)
}

function remove(contactId) {
    return HttpService.delete(`contact/${contactId}`)
}

async function save(contact) {
    if (!contact._id) {
        contact.createdAt = Date.now();
        return HttpService.post('contact', contact)
    }
    return HttpService.put(`contact/${contact._id}`, contact)
}