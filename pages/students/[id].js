import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import axios from "axios";
import styles from '../../styles/student.module.css'

export default function Student() {

    const router = useRouter()
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios.get(` https://fejs-c7-api.herokuapp.com/api/students/${router.query.id}?populate=*`)
            .then((res) => {
                setStudents([res.data.data])
            })
    }, [])

  return (
            <div className={styles.studentContainer}>
                {students.map((student) => {
                    return(
                        <div key={student.id} className={styles.studentCardContainer}>
                            <Zoom>
                                <img className={styles.imageContainer} src={student.attributes.photo.data.attributes.url} width="300"/>
                            </Zoom>
                            <div className={styles.detailsContainer}>
                                <div className={styles.itemContainer}>
                                    <div className={styles.itemTitle}>
                                        First Name:
                                    </div>
                                    <div className={styles.itemContent}>
                                        {student.attributes.firstname}
                                    </div>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div className={styles.itemTitle}>
                                        Last Name:
                                    </div>
                                    <div className={styles.itemContent}>
                                        {student.attributes.lastname}
                                    </div>
                                </div>
                                <div className={styles.itemContainer}>
                                    <div className={styles.itemTitle}>
                                        Location:
                                    </div>
                                    <div className={styles.itemContent}>
                                        {student.attributes.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
  )
}
