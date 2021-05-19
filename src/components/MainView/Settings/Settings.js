import ProjectSorter from "../ProjectSorter";

const Settings = (props) => {

  return (
    <ProjectSorter
      selectedsorting={sorting}
      changedHandler={handlePlotSettingsChanged}
    />
  );
};

export default Settings;
