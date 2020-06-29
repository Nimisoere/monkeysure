import React from 'react';
import PageHeader from '../../components/PageHeader';
import { listings } from '../../listings';
import ListingCardGrid from '../../components/Cards/QuoteCardSmall';
import './listing.scss';
import Assistance from '../../components/NeedAssistance';
import CustomerCard from '../../components/Cards/CustomerDetailCard';
import ListingCardList from '../../components/Cards/QuoteCardBig';
import { useParams, useHistory } from 'react-router-dom';
import { formToRender } from '../../util';
import TravelSideDetail from './Details/Travel';
import PhoneSideDetail from './Details/Phone';
import FuneralSideDetail from './Details/Funeral';
import LifeSideDetail from './Details/Life';
import HomeSideDetail from './Details/Home';
import CarSideDetail from './Details/Car';

const ListingGrid = () => {
  const history = useHistory();
  const category = useParams()?.category;
  const form = formToRender(category);

  const renderDetail = () => {
    switch (category) {
      case 'cars':
        return <CarSideDetail />;
      case 'home':
        return <HomeSideDetail />;
      case 'life':
        return <LifeSideDetail />;
      case 'phone':
        return <PhoneSideDetail />;
      case 'funeral':
        return <FuneralSideDetail />;
      case 'travel':
        return <TravelSideDetail />;
      default:
        return ''
    }
  }

  const getType = () => {
    switch (category) {
      case 'cars':
        return 'grid';
      case 'home':
        return 'list';
      case 'life':
        return 'list';
      case 'phone':
        return 'grid';
      case 'funeral':
        return 'list';
      case 'travel':
        return 'grid';
      default:
        return {}
    }
  }

  const type = getType();

  return (
    <div className="listing">
      <PageHeader leadtext={form.leadtext} subtext={form.subtext} />
      <div className="container mx-auto py-8">
        <div>
          <h4 className="font-normal text-lg">We've found 8 insurance quotes for you</h4>
          <p className="text-base">Please select quotes</p>
        </div>
        <div className="w-full flex">
          <div className="w-9/12">
            <div className="flex flex-wrap py-6 justify-start">
              {
                listings.map(listing => type === 'grid' ? (
                  <div key={listing.id} className="listing-wrapper">
                    <ListingCardGrid btnConfig={{ text: 'BUY', action: () => history.push(`/${category}/confirmation`) }} key={listing.id} listing={listing} />
                  </div>
                ) : (
                    <div key={listing.id + "list"} className="listing-wrapper-full">
                      <ListingCardList btnConfig={{ text: 'BUY', action: () => history.push(`/${category}/confirmation`) }} key={listing.id} listing={listing} />
                    </div>
                  ))
              }
            </div>
            <Assistance />
            <p className="text-xs disclaimer">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus elit sed tortor feugiat eleifend. Aliquam tincidunt tellus ac nunc condimentum, vitae accumsan purus dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus elit sed tortor feugiat eleifend. Aliquam tincidunt tellus ac nunc condimentum, vitae accumsan purus dignissim.
          </p>
          </div>
          <div className="w-3/12">
            <CustomerCard category={category} customerDetails={{
              name: 'John Smith',
              email: 'johnsmith@mail.com',
              phone: '0800 000 0000',
              address: '1, Streetname, Providence Street, off Admiralty Way, Lekki, Lagos',
              dob: '01/01/1994'
            }} />
            <CustomerCard category={category}>
              {renderDetail()}
            </CustomerCard>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ListingGrid