import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import AppSelect from './AppSelect';
import RegionInterface from '../models/RegionInterface';

const options = [
  {
    "id": 18,
    "regionname": "Burkina Faso"
  },
  {
    "id": 2,
    "regionname": "Cameroon"
  },
  {
    "id": 17,
    "regionname": "Cape Verde"
  },
  {
    "id": 3,
    "regionname": "Chad"
  },
  {
    "id": 15,
    "regionname": "Gambia"
  },
  {
    "id": 1,
    "regionname": "Ghana"
  },
]

test('AppSelect renders passed options', async () => {
  render(<AppSelect<RegionInterface> className="mt-10"
    valueProp='id' labelProp="regionname" placeholder="Select Region"
    options={options}
    selected ={null}
    onChange ={(region)=>{}}
    onSearch={(st)=>{}}
  />);
  // onclick of the select
  await userEvent.click(screen.getByRole('button'));

  // expected to see the list of items equal to the options.length
  expect(await screen.findAllByRole('listitem')).toHaveLength(options.length);
});

test('AppSelect calls the onChange callback handler with value', async () => {
  const onChange = jest.fn();
  render(<AppSelect<RegionInterface> className="mt-10"
    valueProp='id' labelProp="regionname" placeholder="Select Region"
    options={options}
    selected ={null}
    onChange ={onChange}
    onSearch={(st)=>{}}
  />);
  // click on button to show list
  await userEvent.click(screen.getByRole('button'));

  // click on second list item
  await userEvent.click((await screen.findAllByRole('listitem'))[1] );

  // expect to have onChange called with second region passed
  expect(onChange).toHaveBeenCalledWith<RegionInterface[]>(options[1]);
});

export { }