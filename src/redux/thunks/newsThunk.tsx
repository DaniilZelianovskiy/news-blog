import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from "../../axios"

export type TnewsThunk = {
     authors:[
          {
               name:string
          }
     ],
     id:number,
     image_url:string,
     title:string,
     url:string,
     published_at:string
     summary:string
}

export const getNews = createAsyncThunk<TnewsThunk[],number>('getBlogs', async(offset:number) =>{
     const NewsDate =  await axiosInstance.get(`/?limit=9&offset=${offset}`)
     return NewsDate.data.results
})

export const getNewsInfo = createAsyncThunk<TnewsThunk,string>('getBlogInfo',async(id:string)=>{
     const newsInfoDate = await axiosInstance.get(`/${id}/`)
     return newsInfoDate.data
})