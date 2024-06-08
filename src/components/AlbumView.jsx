import React, { useEffect, useState } from 'react'
import Navebar from './Navebar'
import axios from 'axios'

const AlbumView = () => {
    const [album, albumchange] = useState([])
    const fetchData=()=>(
        axios.get("https://jsonplaceholder.typicode.com/albums").then(
            (response)=>{
                albumchange(response.data)
            }
        ).catch().finally()
    )
    useEffect(()=>{fetchData()},[])

    return (
        <div>
            <Navebar />
            <div className="contsiner">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-llg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">UserId</th>
                                    <th scope="col">id</th>
                                    <th scope="col">Title</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    album.map(
                                        (value, index) => {
                                            return <tr>
                                                <th scope="row">{value.userId}</th>
                                                <td>{value.id}</td>
                                                <td>{value.title}</td>

                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlbumView
