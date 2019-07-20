import React from 'react';
import StyledRecordingView from '../styledComponents/styledRecordView';

const Record = () => {
    return(
        <StyledRecordingView>
            <div className="record-video"></div>
            <div className="record-controls">
                <button><i class="fa fa-2x fa-video-camera" aria-hidden="true"></i></button>
                <button><i class="fa fa-2x fa-trash-o" aria-hidden="true"></i></button>
                <button><i class="fa fa-2x fa-paper-plane" aria-hidden="true"></i></button>
            </div>
        </StyledRecordingView>
    )
}

export default Record;