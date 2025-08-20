import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../axios"

export type TnewsThunk = {
     authors:{name:string}[],
     id:number,
     image_url:string,
     title:string,
     url:string,
     published_at:string
     summary:string
}

type TgetThunk = {
     offset:number,
     search?:string
}

export const getNews = createAsyncThunk<TnewsThunk[],TgetThunk>('getBlogs', async({offset,search}) =>{
     const NewsDate =  await axiosInstance.get(`/?limit=9&offset=${offset}${search ? `&search=${search}`:""}`)
     return NewsDate.data.results
})

export const getNewsInfo = createAsyncThunk<TnewsThunk,string>('getBlogInfo',async(id:string)=>{
     const newsInfoDate = await axiosInstance.get(`/${id}/`)
     return newsInfoDate.data
})