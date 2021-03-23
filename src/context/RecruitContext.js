import React from 'react'

const RecruitContext = React.createContext({
    resetForm: () => {},
    user: {},
    agents: [],
    activeAgent: {},
    agentNotes: [],
    activeNote: {},
    agentSearch: () => {},
    getAgent: () => {},
    getUser: () => {},
    getAgentNotes: () => {},
    getNote: () => {},
    getFollowedAgents: () => {},
    addUser: () => {},
    addNote: () => {},
    followAgent: () => {},
    updateUser: () => {},
    updateNote: () => {},
    deleteUser: () => {},
    deleteNote: () => {},
    unfollowAgent: () => {},
})

export default RecruitContext;