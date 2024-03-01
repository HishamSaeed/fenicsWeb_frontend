import EditParameter from './widgets/edit-parameter/EditParameter';

function SimulationParameter() {

    return (
        <div>
            <label>Simulation Parameter</label>
            <EditParameter label="T-Start"  endpoint="t_start" event_type="update_t_start"/>
            <EditParameter label="T-End"  endpoint="t_end" event_type="update_t_start"/>
            <EditParameter label="dt"  endpoint="dt" event_type="update_dt"/>
            <EditParameter label="U-In"  endpoint="u_in" event_type="update_u_in"/>
            <EditParameter label="U-Out"  endpoint="u_out" event_type="update_u_out"/>
        </div>
    )
}

export default SimulationParameter;