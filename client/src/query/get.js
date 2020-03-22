import { instance } from '../utils'

const getColor = instance({
    url: "/color",
    method: 'get',
})

const getComposition = instance({
    url: "/composition",
    method: 'get',
})

const getStyle = instance({
    url: "/style",
    method: 'get',
})

const getType = instance({
    url: "/type",
    method: 'get',
})

export default {
    getColor,
    getComposition,
    getStyle,
    getType
}
