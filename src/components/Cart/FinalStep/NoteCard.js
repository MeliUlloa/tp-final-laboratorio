import React from 'react';

const NoteCard = ({ note }) => (
    <div className="card address-card">
        <div className="top">
            <div className="body d-flex flex-column gap-0-5">
                <div className="d-flex a-items-center gap-1 flex-wrap">
                    <p><span>Observaciones:</span></p>
                    <p>{note}</p>
                </div>
            </div>
        </div>
    </div>
);

export default NoteCard;