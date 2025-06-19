import InformationForm from './InformationForm';
export default function Editor({ handlers }) {
    return (
        <div className="editor">
            <InformationForm handlers={handlers.informationForm} />
        </div>
    );
}
