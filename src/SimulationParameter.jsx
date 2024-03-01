import EditParameter from './widgets/edit-parameter/EditParameter';

function SimulationParameter() {

    return (
        <div>
            <EditParameter label="T-Start"  endpoint="t_start"/>
            <EditParameter label="T-Start(duplicate)"  endpoint="t_start"/>
        </div>
    )
}

export default SimulationParameter;