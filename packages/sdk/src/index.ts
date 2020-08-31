/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import ConversationLearnerFactory from './ConversationLearnerFactory'
import { ConversationLearner } from './ConversationLearner'
import { CLOptions } from './CLOptions'
import { CLModelOptions } from './CLModelOptions'
import { ClientMemoryManager, ReadOnlyClientMemoryManager } from './Memory/ClientMemoryManager'
import { RedisStorage } from './RedisStorage'
import { FileStorage } from './FileStorage'
import uiRouter from './uiRouter'
import { SessionEndState, MemoryValue, AppList } from 'clwoz-models'
import { EntityDetectionCallback, OnSessionStartCallback, OnSessionEndCallback, LogicCallback, RenderCallback, ICallbackInput, IGlobalCallbackValues } from './CLRunner'
import { ILogStorage } from './Memory/ILogStorage'
import { CosmosLogStorage } from './CosmosLogStorage'

export {
    uiRouter,
    ConversationLearnerFactory,
    ConversationLearner,
    CLOptions,
    CLModelOptions,
    ClientMemoryManager,
    ReadOnlyClientMemoryManager,
    RedisStorage,
    FileStorage,
    SessionEndState,
    EntityDetectionCallback,
    OnSessionStartCallback,
    OnSessionEndCallback,
    LogicCallback,
    MemoryValue,
    RenderCallback,
    ICallbackInput,
    IGlobalCallbackValues,
    // Interface for custom log storage
    ILogStorage,
    // Sample implementation of ILogStorage using CosmosDB
    CosmosLogStorage,
    AppList
}
