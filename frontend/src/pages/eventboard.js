import React from "react";
import "../stylesheets/eventboard.css";

export const Eventboard = () => {
  return (
    <div className="eventboard__container">
        
        {/* NAV BAR */}
        <div className="eventboard__navbar">
            <h1>EventEase</h1>
            <div className="navbar_middle">
                Search
            </div>
            <div className="navbar_right">
                <div>Browse</div> 
                <div>My Events</div> 
            </div>
        </div>

        {/* EVENT BOARD FRAME */}
        <div className="eventboard__frame">

            {/* EVENT DETAILS */}
            <div className="eventboard__details">
                <h1>EVENT DETAILS</h1>
                <div className="details_frame">
                    <p className="details_head">DATE</p> 
                    <p> May 13, 2022</p>
                </div>
                <div className="details_frame">
                    <p className="details_head">BUDGET</p> 
                    <p> PHP 500,000</p>
                </div>
                <div className="details_frame">
                    <p className="details_head">PAX</p> 
                    <p> 100 PAX</p>
                </div>
                <div className="details_frame">
                    <p className="details_head">REQUIREMENTS</p>
                </div>

                {/* add the selection of requirements */}
            </div>

            {/* EVENT PINS */}

            <div className="eventboard__pins">
                <div className="pin_section">
                    <h1>VENUES</h1>
                    <div className="cards_container">

                        {/* VENUE: Card 1 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Madre de Dios Chapel</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Tagaytay Highlands, Talisay, Batangas</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 30,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>

                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VENUE: Card 2 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Midlands Veranda</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Tagaytay Midlands Golf, Talisay, Batangas</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 160,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>
                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VENUE: Card 3 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Madre de Dios Chapel</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Tagaytay Highlands, Talisay, Batangas</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 30,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>

                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VENUE: Card 4 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Madre de Dios Chapel</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Tagaytay Highlands, Talisay, Batangas</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 30,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>

                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pin_section">
                    <h1>CATERERS</h1>
                    <div className="cards_container">

                        {/* VENUE: Card 1 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Hizon’s Catering</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Quezon City, Metro Manila</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 110,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>

                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* VENUE: Card 2 */}
                        <div className="spcard">
                            <img className="spcard_img" alt="insert img" />
                            <div className="spcard_details">
                                <div className="front-details">
                                    
                                    <div className="details_name">
                                         <h3 className="spname">Midlands Veranda</h3>
                                    </div>
                                    
                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M1.19531 17.9595C1.48535 17.9595 1.74902 17.8628 2.10059 17.6606L6.37207 15.3579L11.0303 17.9683C11.3994 18.1704 11.7861 18.2671 12.1641 18.2671C12.5332 18.2671 12.8936 18.1792 13.2188 17.9858L17.5869 15.5249C18.1934 15.1821 18.457 14.6987 18.457 14.0308V2.22705C18.457 1.47998 18.0088 1.03174 17.2705 1.03174C16.9805 1.03174 16.7168 1.146 16.3564 1.33936L11.9268 3.80029L7.32129 1.02295C6.9873 0.82959 6.62695 0.73291 6.25781 0.73291C5.89746 0.73291 5.53711 0.820801 5.2207 1.00537L0.878906 3.4751C0.272461 3.81787 0 4.28369 0 4.95166V16.7729C0 17.52 0.448242 17.9595 1.19531 17.9595ZM5.58105 13.7847L1.96875 15.771C1.90723 15.7974 1.85449 15.8237 1.81055 15.8237C1.70508 15.8237 1.65234 15.7446 1.65234 15.6216V5.40869C1.65234 5.1626 1.74023 5.00439 1.96875 4.87256L5.29102 2.94775C5.3877 2.88623 5.47559 2.84229 5.58105 2.78955V13.7847ZM7.25098 13.8286V3.00049C7.33887 3.04443 7.43555 3.09717 7.52344 3.1499L11.2061 5.37354V16.0435C11.0918 15.9819 10.9775 15.9204 10.8545 15.8501L7.25098 13.8286ZM12.8848 16.1665V5.20654L16.4971 3.23779C16.541 3.21143 16.5938 3.19385 16.6377 3.19385C16.7432 3.19385 16.8135 3.27295 16.8135 3.38721V13.5474C16.8135 13.8022 16.7256 13.9604 16.4883 14.0923L13.2891 15.9468C13.1572 16.0259 13.0166 16.105 12.8848 16.1665Z" fill="#474747"/>
                                        </svg>
                                        <p>Tagaytay Midlands Golf, Talisay, Batangas</p>
                                    </div>

                                    <div className="details_other">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                            <path d="M9.08789 18.5879C14.0713 18.5879 18.1846 14.4746 18.1846 9.5C18.1846 4.52539 14.0625 0.412109 9.0791 0.412109C4.10449 0.412109 0 4.52539 0 9.5C0 14.4746 4.11328 18.5879 9.08789 18.5879ZM9.08789 16.7773C5.05371 16.7773 1.82812 13.5342 1.82812 9.5C1.82812 5.46582 5.05371 2.23145 9.0791 2.23145C13.1133 2.23145 16.3564 5.46582 16.3652 9.5C16.374 13.5342 13.1221 16.7773 9.08789 16.7773ZM5.84473 9.06055C5.84473 9.29785 6.01172 9.47363 6.25781 9.47363H6.75V13.1211C6.75 13.5518 7.04883 13.8154 7.44434 13.8154C7.83105 13.8154 8.1123 13.5518 8.1123 13.1211V11.1963H9.52734C10.7666 11.1963 11.6982 10.5195 12.0762 9.47363H12.6299C12.876 9.47363 13.0342 9.29785 13.0342 9.06055C13.0342 8.81445 12.876 8.64746 12.6299 8.64746H12.2432C12.2607 8.56836 12.2607 8.48047 12.2607 8.39258C12.2607 8.30469 12.2607 8.22559 12.252 8.12891H12.6299C12.876 8.12891 13.0342 7.94434 13.0342 7.71582C13.0342 7.46094 12.876 7.29395 12.6299 7.29395H12.0674C11.6982 6.27441 10.7842 5.59766 9.5625 5.59766H7.44434C7.01367 5.59766 6.75 5.86133 6.75 6.30078V7.29395H6.25781C6.01172 7.29395 5.84473 7.46094 5.84473 7.71582C5.84473 7.94434 6.01172 8.12891 6.25781 8.12891H6.75V8.64746H6.25781C6.01172 8.64746 5.84473 8.81445 5.84473 9.06055ZM8.12109 7.29395V6.75781H9.30762C9.87012 6.75781 10.3008 6.95117 10.5732 7.29395H8.12109ZM8.12109 8.64746V8.12891H10.8984C10.9072 8.20801 10.916 8.28711 10.916 8.39258C10.916 8.48047 10.9072 8.56836 10.8984 8.64746H8.12109ZM8.12109 10.0361V9.47363H10.582C10.3184 9.83398 9.87012 10.0361 9.30762 10.0361H8.12109Z" fill="#474747"/>
                                        </svg>
                                        <p>PHP 160,000</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                                            <path d="M9.65883 1.8113L10.0342 1.41568C10.2244 1.21536 10.2394 0.939931 10.0492 0.749631L9.91909 0.614418C9.74892 0.444149 9.46364 0.469189 9.27846 0.654481L8.88808 1.03508L9.65883 1.8113ZM3.73304 7.1397L4.75904 6.70902L9.29348 2.17187L8.52272 1.40566L3.98829 5.94782L3.53785 6.93939C3.4878 7.05457 3.61793 7.18477 3.73304 7.1397ZM1.83118 10.5H7.66188C8.62282 10.5 9.18837 9.93912 9.18837 8.86743V3.57909L8.1874 4.57566V8.77728C8.1874 9.25804 7.93215 9.49842 7.59682 9.49842H1.89624C1.43579 9.49842 1.18555 9.25804 1.18555 8.77728V3.21351C1.18555 2.73276 1.43579 2.49238 1.89624 2.49238H6.1454L7.14137 1.4908H1.83118C0.750123 1.4908 0.18457 2.05168 0.18457 3.12337V8.86743C0.18457 9.93912 0.750123 10.5 1.83118 10.5Z" fill="#1E1E1E" fill-opacity="0.5"/>
                                        </svg>
                                    </div>
                                    <div className="show-more">
                                        <div className="show-more_text">
                                            <svg alt="insert img" />
                                            <p>More Details</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>    


            {/* EVENT BUDGET */}
            <div className="eventboard__budget">
                <h1>BUDGET</h1>
                <p className="budget_interact">Interact with the check boxes to see your total cost.</p>
                <p className="budget_php">PHP</p>
                <div className="budget_receipt">
                    <h2>Venue</h2>
                    <div className="receipt_frame">
                        <p>Midlands Verdana</p>
                        <p>160,000</p>
                    </div>

                    <h2>Caterer</h2>                
                    <div className="receipt_frame">
                        <p>Hizon's Catering</p>
                        <p>110,000</p>
                    </div>

                    <div className="receipt_frame">
                        <p>Total</p>
                        <p>270,000</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Eventboard;
