/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { CloudDownload } from '@styled-icons/boxicons-regular/CloudDownload'
import * as S from './styled'
import api from '../../infra/services/api'
import { toast } from 'react-toastify'
import { IDropZoneProps } from './models'

const DropZone = ({ getImport }: IDropZoneProps) => {
  const { getRootProps, getInputProps } = useDropzone({
    accept: '.txt'
  })

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const data = new FormData()
    data.append('file', event.target.files[0])
    try {
      await api.post(`/data/import`, data)
      toast.success('Planilha importada com sucesso')
      !!getImport && getImport(true)
    } catch (error) {
      toast.error('Erro ao importar planilha')
    }
  }

  return (
    <S.DropZone onChange={handleSubmit} {...getRootProps()}>
      <input type="file" accept=".txt" {...getInputProps()} />
      <CloudDownload size={22} />
      <p>Importe soltando o documento aqui ou clicando nesta área</p>
    </S.DropZone>
  )
}

export default DropZone
