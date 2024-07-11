import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'

export const BreadCrumb = ({ listBreadCrumb = [] }) => {
  const renderBreadCrumb = (listBreadCrumb) => {
    if (listBreadCrumb?.length === 0) {
      return null
    }
    let listBreadCrumbReturn = []
    for (let i = 0; i < listBreadCrumb?.length; i++) {
      if (i === listBreadCrumb?.length - 1) {
        listBreadCrumbReturn.push(
          <span key={listBreadCrumb[i]?.key} className="flex text-gray-600 items-center gap-2 mr-2">
            {listBreadCrumb[i]?.data}
          </span>
        )
      } else {
        listBreadCrumbReturn.push(
          <span key={listBreadCrumb[i]?.key} className="flex text-gray-600 items-center gap-2 mr-2">
            {listBreadCrumb[i]?.data} <IoIosArrowForward />
          </span>
        )
      }
    }
    return listBreadCrumbReturn
  }

  return <div className="flex">{renderBreadCrumb(listBreadCrumb)}</div>
}
