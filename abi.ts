export declare const sortitionModuleConfig: {
  readonly address: {
    readonly 421614: "0x19cb28BAB40C3585955798f5EEabd71Eec14471C";
  };
  readonly abi: readonly [
    {
      readonly type: "fallback";
      readonly stateMutability: "payable";
    },
    {
      readonly type: "receive";
      readonly stateMutability: "payable";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [];
      readonly name: "AlreadyInitialized";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [];
      readonly name: "FailedDelegateCall";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [
        {
          readonly name: "implementation";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly name: "InvalidImplementation";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [];
      readonly name: "NotInitializing";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [];
      readonly name: "UUPSUnauthorizedCallContext";
    },
    {
      readonly type: "error";
      readonly inputs: readonly [
        {
          readonly name: "slot";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
      ];
      readonly name: "UUPSUnsupportedProxiableUUID";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "version";
          readonly internalType: "uint64";
          readonly type: "uint64";
          readonly indexed: false;
        },
      ];
      readonly name: "Initialized";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_phase";
          readonly internalType: "enum ISortitionModule.Phase";
          readonly type: "uint8";
          readonly indexed: false;
        },
      ];
      readonly name: "NewPhase";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_address";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
        {
          readonly name: "_amount";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
      ];
      readonly name: "StakeDelayedAlreadyTransferred";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_address";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint96";
          readonly type: "uint96";
          readonly indexed: true;
        },
        {
          readonly name: "_amount";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
      ];
      readonly name: "StakeDelayedAlreadyTransferredWithdrawn";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_address";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
        {
          readonly name: "_amount";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
      ];
      readonly name: "StakeDelayedNotTransferred";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_address";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
        {
          readonly name: "_relativeAmount";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
        {
          readonly name: "_unlock";
          readonly internalType: "bool";
          readonly type: "bool";
          readonly indexed: false;
        },
      ];
      readonly name: "StakeLocked";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "_address";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
        {
          readonly name: "_amount";
          readonly internalType: "uint256";
          readonly type: "uint256";
          readonly indexed: false;
        },
      ];
      readonly name: "StakeSet";
    },
    {
      readonly type: "event";
      readonly anonymous: false;
      readonly inputs: readonly [
        {
          readonly name: "newImplementation";
          readonly internalType: "address";
          readonly type: "address";
          readonly indexed: true;
        },
      ];
      readonly name: "Upgraded";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "DEFAULT_K";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "MAX_STAKE_PATHS";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_maxDrawingTime";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "changeMaxDrawingTime";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_minStakingTime";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "changeMinStakingTime";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_rng";
          readonly internalType: "contract RNG";
          readonly type: "address";
        },
        {
          readonly name: "_rngLookahead";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "changeRandomNumberGenerator";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "core";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "contract KlerosCore";
          readonly type: "address";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "createDisputeHook";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_key";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
        {
          readonly name: "_extraData";
          readonly internalType: "bytes";
          readonly type: "bytes";
        },
      ];
      readonly name: "createTree";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "delayedStakeReadIndex";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "delayedStakeWriteIndex";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "delayedStakes";
      readonly outputs: readonly [
        {
          readonly name: "account";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "courtID";
          readonly internalType: "uint96";
          readonly type: "uint96";
        },
        {
          readonly name: "stake";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "alreadyTransferred";
          readonly internalType: "bool";
          readonly type: "bool";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "disputesWithoutJurors";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_key";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
        {
          readonly name: "_coreDisputeID";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "_nonce";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "draw";
      readonly outputs: readonly [
        {
          readonly name: "drawnAddress";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_iterations";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "executeDelayedStakes";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_juror";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint96";
          readonly type: "uint96";
        },
      ];
      readonly name: "getJurorBalance";
      readonly outputs: readonly [
        {
          readonly name: "totalStaked";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "totalLocked";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "stakedInCourt";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "nbCourts";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_juror";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly name: "getJurorCourtIDs";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint96[]";
          readonly type: "uint96[]";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "governor";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_governor";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_core";
          readonly internalType: "contract KlerosCore";
          readonly type: "address";
        },
        {
          readonly name: "_minStakingTime";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "_maxDrawingTime";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "_rng";
          readonly internalType: "contract RNG";
          readonly type: "address";
        },
        {
          readonly name: "_rngLookahead";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "initialize";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_juror";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly name: "isJurorStaked";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "bool";
          readonly type: "bool";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly name: "jurors";
      readonly outputs: readonly [
        {
          readonly name: "stakedPnk";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "lockedPnk";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "lastPhaseChange";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "";
          readonly internalType: "uint96";
          readonly type: "uint96";
        },
      ];
      readonly name: "latestDelayedStakeIndex";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_account";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_relativeAmount";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "lockStake";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "maxDrawingTime";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "minStakingTime";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_randomNumber";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "notifyRandomNumber";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "passPhase";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_account";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_relativeAmount";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "penalizeStake";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "phase";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "enum ISortitionModule.Phase";
          readonly type: "uint8";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "postDrawHook";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "proxiableUUID";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "randomNumber";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "randomNumberRequestBlock";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "rng";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "contract RNG";
          readonly type: "address";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [];
      readonly name: "rngLookahead";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_account";
          readonly internalType: "address";
          readonly type: "address";
        },
      ];
      readonly name: "setJurorInactive";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_account";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint96";
          readonly type: "uint96";
        },
        {
          readonly name: "_newStake";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "_alreadyTransferred";
          readonly internalType: "bool";
          readonly type: "bool";
        },
      ];
      readonly name: "setStake";
      readonly outputs: readonly [
        {
          readonly name: "pnkDeposit";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "pnkWithdrawal";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
        {
          readonly name: "succeeded";
          readonly internalType: "bool";
          readonly type: "bool";
        },
      ];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_key";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
        {
          readonly name: "_ID";
          readonly internalType: "bytes32";
          readonly type: "bytes32";
        },
      ];
      readonly name: "stakeOf";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_juror";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_courtID";
          readonly internalType: "uint96";
          readonly type: "uint96";
        },
      ];
      readonly name: "stakeOf";
      readonly outputs: readonly [
        {
          readonly name: "";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly stateMutability: "view";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "_account";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_relativeAmount";
          readonly internalType: "uint256";
          readonly type: "uint256";
        },
      ];
      readonly name: "unlockStake";
      readonly outputs: readonly [];
      readonly stateMutability: "nonpayable";
    },
    {
      readonly type: "function";
      readonly inputs: readonly [
        {
          readonly name: "newImplementation";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "data";
          readonly internalType: "bytes";
          readonly type: "bytes";
        },
      ];
      readonly name: "upgradeToAndCall";
      readonly outputs: readonly [];
      readonly stateMutability: "payable";
    },
    {
      readonly type: "constructor";
      readonly inputs: readonly [
        {
          readonly name: "_implementation";
          readonly internalType: "address";
          readonly type: "address";
        },
        {
          readonly name: "_data";
          readonly internalType: "bytes";
          readonly type: "bytes";
        },
      ];
      readonly stateMutability: "nonpayable";
    },
  ];
};
