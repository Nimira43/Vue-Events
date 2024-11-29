import { Button, Input } from 'antd'

export default function page() {
  return (
    <div className='p-5 flex flex-col gap-5'>
      <h1 className='text-[#028ec6] text-4xl'>Stour End Motors</h1>
      <h4 className='text-2xl'>Enter Vehicle Details</h4>
      <Input 
      placeholder='Enter Car Model'
      />
      <Input 
      placeholder='Enter Car Registration'
      />
      <Button
        type='primary'
      >Confirm</Button>
      <Button
        type='default'
      >Cancel</Button>

    </div>
  )
}
