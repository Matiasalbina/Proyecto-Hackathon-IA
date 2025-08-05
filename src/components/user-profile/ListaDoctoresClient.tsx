// src/app/(admin)/(ui-elements)/videos/ListaDoctoresClient.tsx
'use client'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDoctores } from '../../redux/slices/DoctoresSlices'
import { RootState, AppDispatch } from '@/redux/store'

export default function ListaDoctoresClient() {
  const dispatch = useDispatch<AppDispatch>()
  const { lista, loading, error } = useSelector((state: RootState) => state.doctores)

  useEffect(() => {
    dispatch(fetchDoctores())
  }, [dispatch])

  if (loading) return <p>Cargando doctores...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <ul>
      {lista.map((doc) => (
        <li key={doc.id}>
          {doc.nombre} - {doc.profesion}
        </li>
      ))}
    </ul>
  )
}
