import React, { useState } from 'react'
import Table from 'react-bootstrap/Table'
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { allInvoices, deleteInvoice } from '../features/invoiceSlice'
import { Link, useNavigate } from 'react-router-dom';
import InvoiceModal from '../components/InvoiceModal';
import { AiOutlineEye } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { BiTrash } from "react-icons/bi";
import { MdAdd } from "react-icons/md"
import { CgPlayListAdd } from "react-icons/cg"


function AllInvoice() {
  const { payload } = useSelector(allInvoices);
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState()

  const closeModal = (event) => setShowModal(false)

  console.log('All Invoices:', payload.invoices);

  const handleModal = (index, bool) => {
    setShowModal(bool)
    setData(index)
  }
  return (
    <div className="App d-flex flex-column justify-content-start w-75 mt-5">
      <InvoiceModal showModal={showModal} closeModal={closeModal} info={payload.invoices[data]} items={payload.invoices[data]?.items} currency={payload.invoices[data]?.currency} subTotal={payload.invoices[data]?.subTotal} taxAmmount={payload.invoices[data]?.taxAmmount} discountAmmount={payload.invoices[data]?.discountAmmount} total={payload.invoices[data]?.total} />

      <div className='d-flex justify-content-between my-3'>
        <h3>#Invoices</h3>
        <Button variant="primary" className="d-flex gap-2 align-items-center fw-bold" onClick={() => navigate('/create-invoice')}><MdAdd size={20} />Create new Invoice</Button>
      </div>
      <Table stripped hover size="sm">
        <thead>
          <tr>
            <th width="200" className='p-3'>Invoice No</th>
            <th width="170" className='p-3'>Billing to</th>
            <th width="170" className='p-3'>Date</th>
            <th width="150" className='p-3'>Amount</th>
            <th width="300" className='p-3'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            payload.invoices.map((invoice, index) => <tr key={invoice.id}>
              <td className='p-3 no-border'>#{invoice?.invoiceNumber}</td>
              <td className='p-3 no-border'>{invoice?.billTo}</td>
              <td className='p-3 no-border'>{invoice?.dateOfIssue}</td>
              <td className='p-3 no-border'>{invoice?.subTotal}</td>
              <td className='p-3 no-border d-flex gap-3'>
                <OverlayTrigger
                  delay={{ hide: 200, show: 100 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      View
                    </Tooltip>
                  )}
                  placement="bottom"
                ><Button className='text-white btn btn-success' onClick={() => handleModal(index, true)}><AiOutlineEye size={17} className='cursor' /></Button>
                </OverlayTrigger>

                <OverlayTrigger
                  delay={{ hide: 200, show: 100 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Edit
                    </Tooltip>
                  )}
                  placement="bottom"
                ><Link to={`/edit-invoice/${invoice.id}`}><Button ><FiEdit size={16} /></Button></Link>
                </OverlayTrigger>

                <OverlayTrigger
                  delay={{ hide: 200, show: 100 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Create a copy of this invoice
                    </Tooltip>
                  )}
                  placement="bottom"
                ><Link to={`/create-new-from-existing/${invoice.id}`}><Button ><CgPlayListAdd size={20} /></Button></Link>
                </OverlayTrigger>

                <OverlayTrigger
                  delay={{ hide: 200, show: 100 }}
                  overlay={(props) => (
                    <Tooltip {...props}>
                      Delete
                    </Tooltip>
                  )}
                  placement="bottom"
                ><Button className='text-white btn btn-danger' onClick={() => dispatch(deleteInvoice(invoice.id))}><BiTrash size={18} /></Button>
                </OverlayTrigger>
              </td>
            </tr>)
          }
        </tbody>
      </Table>
    </div>
  )
}

export default AllInvoice