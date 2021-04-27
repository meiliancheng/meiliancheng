import { request } from "umi"
export function article() {
    return request("/api/article/archives")
}
export function recommend() {
    return request("/api/article/recommend")
}
export function category() {
    return request("/api/category")
}
export function tag(){
    return request("/api/tag")
}
export function article_id(id){
    return request(`/api/article/${id}`)
}